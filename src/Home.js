import React, { useEffect, useContext, useState } from "react";
import Header from "./components/Header";
import MilestoneList from "./components/MilestoneList.js";
import ModalForm from "./components/ModalForm.js";
import styled from "styled-components";
import { FirebaseContext } from "./firebase/index.js";

const Wrapper = styled.div`
  font-family: Helvetica;
  background-color: #f1faee;
  padding-top: 1rem;
  min-height: 100vh;
  position: relative;
  padding: 5rem 0;
  padding-top: 0;
  display: flex;
`;

const Warning = styled.div`
  text-align: center;
  font-size: 1.5rem;
  padding-top: 2rem;
  color: #98234a;
`;

const WarningText = styled.p`
  margin: 0;
`;

function Home() {
  const firebase = useContext(FirebaseContext);
  const [modalVisible, setModalVisible] = useState("none");
  const [milestoneLists, setMilestoneLists] = useState([]);
  const [newMilestones, setNewMilestones] = useState(0);

  const mapMilestones = (milestonesData) => {
    if (!Array.isArray(milestonesData)) return milestonesData;

    return milestonesData.map((data, index) => {
      if (data.title !== "") {
        return (
          <React.Fragment key={index}>
            <MilestoneList title={data.title} cardsData={data.array} />
          </React.Fragment>
        );
      } else {
        return null;
      }
    });
  };

  useEffect(() => {
    let getRef;

    firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        getRef = () => firebase.getMilestoneRef(user.uid);

        try {
          getRef()
            .get()
            .then((snapshots) => {
              const categoriesData = [{ title: "", array: [] }];
              let indexes = 0;
              snapshots.forEach((milestone) => {
                if (
                  categoriesData.some((value, index) => {
                    if (value.title === "") {
                      indexes = index;
                      return true;
                    } else if (value.title !== milestone.data().categoryTitle) {
                      return false;
                    } else {
                      indexes = index;
                      return true;
                    }
                  })
                ) {
                  if (indexes === categoriesData.length - 1) {
                    categoriesData[
                      indexes
                    ].title = milestone.data().categoryTitle;
                    categoriesData[indexes].array.push(milestone.data());
                    categoriesData.push({ title: "", array: [] });
                  } else {
                    categoriesData[indexes].array.push(milestone.data());
                  }
                } else {
                  categoriesData[indexes].push(milestone.data());
                }
              });

              if (categoriesData.length > 1) {
                setMilestoneLists(categoriesData);
              } else {
                setMilestoneLists(
                  <Warning>
                    <WarningText>
                      No hay nada papá. Tiene que crear una Milstone
                    </WarningText>
                  </Warning>
                );
              }
            });
        } catch (err) {
          console.log("This is the error: " + err);
        }
      } else {
        getRef = () => firebase.getMilestoneRef("");
      }
    });
  }, []);

  useEffect(() => {
    if (newMilestones !== 0) {
      let indexes = 0;

      if (!Array.isArray(milestoneLists)) {
        setMilestoneLists([
          { title: newMilestones.title, array: [newMilestones.data] },
        ]);
        return;
      }

      if (
        milestoneLists.some((data, index) => {
          indexes = index;
          return newMilestones.title === data.title;
        })
      ) {
        setMilestoneLists(
          milestoneLists.map((data, index) => {
            if (index === indexes)
              return {
                title: data.title,
                array: [...data.array, newMilestones.data],
              };
            else return data;
          })
        );
      } else {
        setMilestoneLists([
          ...milestoneLists,
          { title: newMilestones.title, array: [newMilestones.data] },
        ]);
      }
    } else {
      return;
    }
  }, [newMilestones]);

  return (
    <>
      <Wrapper>
        <Header />
        <ModalForm
          setMilestone={setNewMilestones}
          modalDisplay={{ visible: modalVisible, setVisible: setModalVisible }}
        />
        {<p>Cargando papá. Esperese un momentico...</p> &&
          mapMilestones(milestoneLists)}
      </Wrapper>
    </>
  );
}

export default Home;

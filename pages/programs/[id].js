import React from "react";
import BasicContainer from "~/components/layouts/BasicContainer";
import BasicLayout from "~/components/layouts/BasicLayout";
import Program from "~/wrappers/program/Program";
import donation from "~/json/donation.json";

const ProgramIndex = ({ data }) => {
  return (
    <BasicLayout staticAppBar>
      <BasicContainer>
        <Program data={data} />
      </BasicContainer>
    </BasicLayout>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;

  const data = donation.filter(({ id: jsonId }) => {
    console.log(jsonId, id);
    return jsonId === parseInt(id);
  })[0];
  console.log(data);
  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
//     fallback: false, // See the "fallback" section below
//   };
// }

export default ProgramIndex;

const courseMainPage = (props) => {
  return (
    <>
      <h1>course</h1>
      <ol>
        {props.course.map((el) => {
          return (
            <div key={el}>
              <li>{el}</li>
            </div>
          );
        })}
      </ol>
    </>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      course: ["full stack web devlopment", "full stack android devlopment"],
    },
    notFound: false,
  };
};

export default courseMainPage;

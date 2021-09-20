import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Beach Coding",
    image:
      "https://media.istockphoto.com/photos/woman-using-laptop-under-the-palm-tree-at-a-beach-picture-id182767952",
    adress: "Public Beach",
  },
  {
    id: "m2",
    title: "Another Beach Coding",
    image: "https://responsaprevent.bg/wp-content/uploads/2021/07/Work-Sea.jpg",
    adress: "Public Beach",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};
export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;

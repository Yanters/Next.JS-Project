import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "Beach Coding",
//     image:
//       "https://media.istockphoto.com/photos/woman-using-laptop-under-the-palm-tree-at-a-beach-picture-id182767952",
//     adress: "Public Beach",
//   },
//   {
//     id: "m2",
//     title: "Another Beach Coding",
//     image: "https://responsaprevent.bg/wp-content/uploads/2021/07/Work-Sea.jpg",
//     adress: "Public Beach",
//   },
// ];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};
export async function getStaticProps() {
  console.log("GetStaticProps");

  const client = await MongoClient.connect(
    "mongodb+srv://Yanter:password@cluster0.ozync.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollections = db.collection("meetups");

  const meetups = await meetupsCollections.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;

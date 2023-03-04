import user1 from "../assets/users/user-1.jpg";
import user2 from "../assets/users/user-2.jpg";
import user3 from "../assets/users/user-3.jpg";
import user4 from "../assets/users/user-4.jpg";
import user5 from "../assets/users/user-5.jpg";
import user6 from "../assets/users/user-6.jpg";
import user7 from "../assets/users/user-7.jpg";

const allImages = [user1, user2, user3, user4, user5, user6, user7];

export const getRandomUserImage = () =>
  allImages[Math.floor(Math.random() * 6 + 1)];

export const TODO_STATUS = {
  NOT_STARTED: 0,
  IN_PROGRESS: 1,
  COMPLETED: 2,
};

export const TODO_HEADERS = {
  0: {
    title: "Not Started",
    barColor: "#0080ff",
  },
  1: {
    title: "In Progress",
    barColor: "#996ce8",
  },
  2: {
    title: "Completed",
    barColor: "#00dc00",
  },
};

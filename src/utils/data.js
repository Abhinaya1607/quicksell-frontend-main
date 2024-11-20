
import BacklogIcon from "../components/icons/Backlog.svg";
import CancelledIcon from "../components/icons/Cancelled.svg";
import DoneIcon from "../components/icons/Done.svg";
import InProgressIcon from "../components/icons/in-progress.svg";
import ToDoIcon from "../components/icons/To-do.svg";

export const priorities = [
    { title: "urgent", color: "orange", icon: <img src={BacklogIcon} alt="Urgent" /> },
    { title: "high", color: "black", icon: <img src={DoneIcon} alt="High" /> },
    { title: "medium", color: "gray", icon: <img src={InProgressIcon} alt="Medium" /> },
    { title: "low", color: "lightgray", icon: <img src={ToDoIcon} alt="Low" /> },
    { title: "no priority", color: "gray", icon: <img src={CancelledIcon} alt="No Priority" /> }
];

export const status = [
    { title: "backlog", color: "black", icon: <img src={BacklogIcon} alt="Backlog" /> },
    { title: "todo", color: "grey", icon: <img src={ToDoIcon} alt="To Do" /> },
    { title: "in progress", color: "orange", icon: <img src={InProgressIcon} alt="In Progress" /> },
    { title: "done", color: "purple", icon: <img src={DoneIcon} alt="Done" /> },
    { title: "cancelled", color: "gray", icon: <img src={CancelledIcon} alt="Cancelled" /> },
];
export const statusIcons = {
    backlog: {
        icon: <img src={BacklogIcon} alt="Backlog" />,
        color: "black",
    },
    todo: {
        icon:  <img src={ToDoIcon} alt="Low" />,
        color: "lightgrey",
    },
    "in progress": {
        icon: <img src={InProgressIcon} alt="In Progress"/>,
        color: "yellow",
    },
    done: {
        icon: <img src={DoneIcon} alt="Done" />,
        color: "purple",
    },
    cancelled: {
        icon: <img src={CancelledIcon} alt="Cancelled" />,
        color: "gray",
    },
};

export const generateIntials = (name) => {
    return name.split(' ').map(word => word.charAt(0)).join('');
}

const bgColors = ["orange", "blue", "green", "red"];
export const getRandomColor = () => {
    const randomInd = Math.floor(Math.random() * bgColors.length);
    return bgColors[randomInd];
};



// const Greet = (props) => {
    export const Greet = ({name= "Guest"}) => {
    // props are immutable and cannot be changed
    // can be passed from parent component to child component
    // cannot be passed from child component to parent component
    // console.log(props);

    // let { name } = props;
    return (
        <div>
    <h1>Hello, {name}</h1>

        </div>
)}
export default Greet;
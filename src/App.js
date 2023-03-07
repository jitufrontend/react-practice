import Video from "./components/Video";
import Resume from "./components/Resume";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  // let obj = {
  //   title :"This is Html5 Tutorial",
  //   background : "skyblue",
  //   views: "5M"
  // }

 let resume = {
  Interests : ["Drawing","Photography","Design","Programming","Computer Science"],
  Education : [ "Wilton High School","Silvermine School of Arts","Codeacademy"],
  Skills : [ "Web Design with HTML & CSS"]
 
 }
  return (
    <div>
      {/* <Video title = "This is Css3" background = "green"></Video> */}
      <Resume 
      interests = {resume ['Interests']}
      education = {resume ['Education']}
      skills = {resume ['Skills']}
      >

      </Resume>
    </div>
  );
}
export default App;

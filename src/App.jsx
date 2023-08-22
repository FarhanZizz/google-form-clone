import Answer from "./components/Answer";
import Checkbox from "./components/Checkbox";
import Dropdown from "./components/Dropdown";
import File from "./components/File";
import Footer from "./components/Footer";
import FormActions from "./components/FormActions";
import Info from "./components/info";
import Mcq from "./components/Mcq";
import MultiChoice from "./components/MultiChoice";
import Paragraph from "./components/Paragraph";
import Scale from "./components/Scale";
import TickBox from "./components/TickBox";

function App() {
  return (
    <div className="border-t-[10px] border-primary my-3 max-w-[90vw] md:w-[640px] mx-auto rounded-lg grid grid-cols-1 gap-4">
      <Info />
      <Mcq />
      <Checkbox />
      <Answer />
      <Paragraph />
      <Dropdown />
      <File />
      <Scale />
      <MultiChoice />
      <TickBox />
      <FormActions />
      <Footer />
    </div>
  );
}

export default App;

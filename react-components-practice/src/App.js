import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <Header title="React Components Practice" />

      <Card title="Card One" description="This is the first reusable card." />
      <Card title="Card Two" description="This is the second reusable card." />

      <Button />
      <Form />

      <Footer />
    </div>
  );
}

export default App;
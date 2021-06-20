import Offers from './Components/Offers';
import Testimonials from './Components/Testimonials';
import News from './Components/News';
import Form from './Components/Form';

function App() {
  return (
    <>
      <Offers
        header="Our offer Data Science and Analytics Services"
        description="lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero perspiciatis sequi delectus maxime"
      />

      <Testimonials
        header="What say our clients about our awesome service"
        description="lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero perspiciatis sequi delectus maxime"
      />
      <News
        header="Latest data Science and our company news"
        description="lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero perspiciatis sequi delectus maxime"
      />
      <Form
        header="Get Readt to Started , it's free & very Easy"
        description="lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero perspiciatis sequi delectus maxime"
      />
    </>
  );
}

export default App;

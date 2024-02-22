import Navbar from "./component/navbar/page";
import Order from "./component/order/page";
import Popularfood from "./component/popular/page";
import Speacialoffer from "./component/speacialoffer/page";
import Restaurant from "./component/place of restaurant/page";
import Customerreview from "./component/customer review/page";
import Stayintouch from "./component/stayin touch/page";
import Footer from "./component/footer/page";



export default function Home() {
  return (
   <>
   <Navbar />
   <Order />
   <Popularfood />
   <Speacialoffer />
   <Restaurant />
   <Customerreview />
   <Stayintouch />
   <Footer />

    
    </>
  );
}

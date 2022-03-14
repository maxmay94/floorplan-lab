import Sink from "./Sink";
import Oven from "./Oven";

const Kitchen = (props) => {
  return ( 
    <div>
      <h4>Kitchen</h4>
      <Oven key="oven" /> 
      <Sink key="sink" />
    </div>
   );
}
 
export default Kitchen;
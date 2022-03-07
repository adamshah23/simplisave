import { Result, Button } from 'antd';
import { useNavigate } from "react-router-dom";

export default function Results() {
  
  let navigate1 = useNavigate(); 
  const routeChange1 = () =>{ 
     let path = `/Home`; 
     navigate1(path);
  }

  let navigate2 = useNavigate(); 
  const routeChange2 = () =>{ 
     let path = `/StorageInventory`; 
     navigate2(path);
  }


  return (
    <Result
    status="success"
    title="Successfully Donated Your Excess Food to a Local Donation Center!"
    subTitle="Order number: 2017182818828182881, keep up the good work!"
    extra={[
      <Button type="primary" key="console" onClick={routeChange1}>
        Back to the Homepage
      </Button>,
      <Button key="buy" onClick={routeChange2}> Keep on Donating </Button>,
    ]}
    />
  );

}
import Head from 'next/head'
import Layout from '../../components/layout'
import EvFlowStyle2 from '../../styles/EVFlow2.module.scss'

const MiddleWire = ({ evState }: { evState?: "in" | "out" | "stop" }) => {
  let directionClass;
  let wireClass;
  switch (evState) {
    case "out":
      wireClass = EvFlowStyle2.outMiddleWire;
      directionClass = EvFlowStyle2.down;
      break;
    case "in":
      wireClass = EvFlowStyle2.inMiddleWire;
      directionClass = EvFlowStyle2.up;
      break;
    default:
      wireClass = EvFlowStyle2.middleWire;
      directionClass = ""
  }

  const Arrow = () => evState === "stop" ? (<></>) : (
    <div className={EvFlowStyle2.arrows}>
      <img src='/images/arrow5.png' />
    </div>
  );

  return (
    <div className={directionClass}>
      <div className={wireClass}>
        <Arrow />
        <Arrow />
      </div>
    </div>
  );
};

const MainWire = ({ evState }: { evState?: "out" | "stop" }) => {

  let wireClass = EvFlowStyle2.right + " ";
  switch (evState) {
    case "out":
      wireClass += EvFlowStyle2.outMainWire;
      break;
    default:
      wireClass += EvFlowStyle2.mainWire;
  }

  const Arrow = () => evState === "stop" ? (<></>) : (
    <div className={EvFlowStyle2.arrows}>
      <img src='/images/arrow5.png' />
      <img src='/images/arrow5.png' />
    </div>
  );

  return (
    <div className={wireClass}>
      <Arrow />
      <Arrow />
    </div>
  );
};

export default function FirstPst() {
  return (
  <Layout>
    <Head>
      <title>EV-Flow Example2</title>
    </Head>
    <h1>EV-Flow Example2</h1>

    <div className={EvFlowStyle2.outerContainer}>
      <div className={EvFlowStyle2.boxSection}>
        <div className={EvFlowStyle2.box}>
          1
        </div>

        <div className={EvFlowStyle2.box}>
          2
        </div>

        <div className={EvFlowStyle2.box}>
          3
        </div>

        <div className={EvFlowStyle2.box}>
          4
        </div>

        <div className={EvFlowStyle2.box}>
          5
        </div>
      </div>

      <div className={EvFlowStyle2.middleWireSection}>
        <MiddleWire evState='stop' />
        <MiddleWire evState='out' />
        <MiddleWire evState='stop' />
        <MiddleWire evState='in' />
        <MiddleWire evState='in' />
      </div>
      
      <div className={EvFlowStyle2.mainWireSection}>
        <div className={EvFlowStyle2.wireLayer}>
          <MainWire evState='stop' />
          <MainWire evState='out' />
          <MainWire evState='out' />
          <MainWire evState='out' />
        </div>

        <div className={EvFlowStyle2.jointLayer}>
          <div className={EvFlowStyle2.joint} />
          <div className={EvFlowStyle2.outJoint} />
          <div className={EvFlowStyle2.outJoint} />
          <div className={EvFlowStyle2.outJoint} />
          <div className={EvFlowStyle2.outJoint} />
        </div>
      </div>

    </div>
  </Layout>
  );
}
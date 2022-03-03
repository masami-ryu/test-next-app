import Head from 'next/head'
import Layout from '../../components/layout'
import EvFlowStyle from '../../styles/EvFlow.module.css'
import EvFlowStyle2 from '../../styles/EVFlow2.module.scss'

const EVWire = ({ to = "bottom", evState = "out", length = 1 }: { to?: "top" | "bottom" | "right", evState?: "in" | "out" | "stop", length?: number }) => {

  const wireClass = evState === "out" ? EvFlowStyle2.outWire : EvFlowStyle2.stopWire;


  return (
    <div className={EvFlowStyle2.down}>
      <div className={wireClass}>
        <div className={EvFlowStyle2.arrowContainer + ' ' + EvFlowStyle2.yArrowMotion}>
          <img src='/images/arrow5.png' />
          <img src='/images/arrow5.png' />
        </div>
        <div className={EvFlowStyle2.arrowContainer + ' ' + EvFlowStyle2.yArrowMotion}>
          <img src='/images/arrow5.png' />
          <img src='/images/arrow5.png' />
        </div>
      </div>
    </div>
  );
}

export default function FirstPst() {
  return (
  <Layout>
    <Head>
      <title>EV-Flow Example</title>
    </Head>
    <h1>EV-Flow Example</h1>

    <div className={EvFlowStyle.container}>
      <div className={EvFlowStyle.boxSection}>

        <div className={EvFlowStyle.boxwrap}>
          <div className={EvFlowStyle.box}>
            1
          </div>
          <EVWire evState='out' />
        </div>

        <div className={EvFlowStyle.boxwrap}>
          <div className={EvFlowStyle.box}>
            2
          </div>
          <div className={EvFlowStyle2.stopWire}>

          </div>
        </div>

        <div className={EvFlowStyle.boxwrap}>
          <div className={EvFlowStyle.box}>
            3
          </div>
          <div className={EvFlowStyle.wire}>

          </div>
        </div>

        <div className={EvFlowStyle.boxwrap}>
          <div className={EvFlowStyle.box}>
            4
          </div>
          <div className={EvFlowStyle.wire}>

          </div>
        </div>

        <div className={EvFlowStyle.boxwrap}>
          <div className={EvFlowStyle.box}>
            5
          </div>
          <div className={EvFlowStyle.wire + ' ' + EvFlowStyle.inWire}>
            <div className={EvFlowStyle.yArrowMotion + ' ' + EvFlowStyle.reverseArrowMotion}>
              <img
                src='/images/arrow5.png'
                className={EvFlowStyle.upArrowImg}
              />
            </div>
          </div>
        </div>

      </div>

      <div className={EvFlowStyle.mainWireSection}>
        
        <div className={EvFlowStyle.pointLayer}>
          <div className={EvFlowStyle.wirePoint}>
          </div>

          <div className={EvFlowStyle.wirePoint}>
          </div>
          
          <div className={EvFlowStyle.wirePoint}>
          </div>

          <div className={EvFlowStyle.wirePoint}>
          </div>

          <div className={EvFlowStyle.wirePoint}>
          </div>
        </div>
        
        <div className={EvFlowStyle.wireLayer}>
          <div className={EvFlowStyle.mainWire}>
            
            <div className={EvFlowStyle.xArrowMotion}>
              <img
                src='/images/arrow5.png'
                className={EvFlowStyle.rightArrowImg}
              />
            </div>
          </div>
          
          <div className={EvFlowStyle.mainWire}>
            <div className={EvFlowStyle.xArrowMotion}>
              <img
                src='/images/arrow5.png'
                className={EvFlowStyle.rightArrowImg}
              />
            </div>
          </div>

          <div className={EvFlowStyle.mainWire}>
            <div className={EvFlowStyle.xArrowMotion}>
              <img
                src='/images/arrow5.png'
                className={EvFlowStyle.rightArrowImg}
              />
            </div>
          </div>

          <div className={EvFlowStyle.mainWire}>
            <div className={EvFlowStyle.xArrowMotion}>
              <img
                src='/images/arrow5.png'
                className={EvFlowStyle.rightArrowImg}
              />
            </div>
          </div>

        </div>

      </div>
      
    </div>
  </Layout>
  );
}
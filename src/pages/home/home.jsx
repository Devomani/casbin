import React from 'react'
import './home.css' 
import Imagge from '../../images/Imagge.svg'
import Bincoin from '../../images/Bincoin.svg'

export const HomeComponent = () => {
  return (
    <div>
        <div className="dashboardContainer">
          <div className="money-header">
            <div className="money-bin">
              <img src={Bincoin} alt="" />
            </div>
            <div className="money-bin">
              {/* <h1>hdhdh</h1> */}
            </div>
          </div>
          <div className="title-bar">
            <div className="t-img">
              <img style={{height: '8rem', paddingBottom: ''}} src={Imagge} alt="img" />
            </div>
            <div className="t-text">
              <h1>Yay, Keep it up!</h1>
              <p>You have  trashed <br />
              <bold>600 kg</bold> of plastic waste
              </p>

            </div>

          </div>
          <div className="history" style={{display: 'flex', justifyItem: 'right', alignItem: 'right', height: '100%' }}>
              <h1 style={{display: 'flex', justifyItem: 'right!important', alignItem: 'right!important', height: '100px', color: 'green', marginLeft: '180px', fontSize: '22px', fontWeight: '600', paddingTop: '15px' }}>Recent History :</h1>
            <div className="withdraw">
              <div className="wd-cover">
                <h1>WD</h1>
              </div>
              <div className="wd-content">
                {/* <h1>Withdraw</h1> */}
                <p>
                  {/* You just withdrawed <bold>BC 4,000</bold> which is worth <bold>N400</bold> from your wallet */}
                </p>
              </div>
            </div>
            <hr />
            <div className="withdraw">
              <div className="wd-cover">
                <h1>TR</h1>
              </div>
              <div className="wd-content">
                {/* <h1>Trashed</h1> */}
                <p>
                   You just withdrawed <bold>BC 4,000</bold> which is worth <bold>N400</bold> from your wallet 
                </p>
              </div>
            </div>
              <hr />
            <div className="withdraw">
              <div className="wd-cover">
                <h1>TR</h1>
              </div>
              <div className="wd-content">
                 <h1>Transferred</h1> 
                <p>
                   You just transferred <bold>BC 4,000</bold> to <bold>08012345678</bold>, your balance is<bold>N400</bold> 
                </p>
              </div>
            </div>
            <hr />
          </div>


        </div> 
    </div>
  )
}

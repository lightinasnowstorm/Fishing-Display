import React from 'react'

class FishingDisplayJSLess extends React.Component {
    state = {
        breadcrumbFish: false,
        fishies: {
            MACKEREL_MACHINE: false,
            COELACANTH_MACHINE: false,
            BREAM_MACHINE: false,
            STARFISH_MACHINE: false,
            SWORDFISH_MACHINE: false,
            BLOWFISH_MACHINE: false,
            BLOAT_FISH_MACHINE: false,
            CARP_MACHINE: false,

            ARAPAIMA_MACHINE: false,
            KOI_CARP_MACHINE: false,
            KILLIFISH_MACHINE: false,
            BASKING_SHARK: false,
            BREAM: false,
            STARFISH: false,
            BEETLE_FISH: false,
            HORSESHOE_CRAB: false,

            MACKEREL: false,
            SWORDFISH: false,
            BLOWFISH: false,
            COELACANTH: false,
            TWOFACE: false,
            WATER_FLEA: false,
            OIL_SARDINE: false,
            ARAPAIMA: false,

            FRESHWATER_RAY: false,
            FUR_CARP: false,
            KOI_CARP: false,
            BLOAT_FISH: false,
            CARP: false,
            KILLIFISH: false,
            TWINFISH: false,
            AROWANA: false,

            IRON_PIPE: false,
            POD_B: false,
            BROKEN_FIREARM: false,

            BATTERY: false,
            GAS_CYLINDER: false,
            TIRE: false,
            MACHINE_LIFEFORM_HEAD: false,
            FRESHWATER_RAY_MACHINE: false,
            BASKING_SHARK_MACHINE: false,
            AROWANA_MACHINE: false,
            HORSESHOE_CRAB_MACHINE: false,
        }
    }


    render = () => {
        var fish = Object.entries(this.state.fishies)

        //size constants- move to props?
        const fishBoxHeight = 270
        const fishBoxWidth = 486
        const fishSize = 50
        const fishPadding = 2


        return (<div>

            <div className="fishBox" id="fishBox">
                {
                    fish.map(([n, fished]) => (
                        <div className="fish caught" id={n} key={n} >
                            <img className="check" src="./images/Checkmark.png" />
                            <img className="fishImg" src={`./images/${n}.png`} />
                        </div>
                    ))
                }
            </div>
            <style>
                {`
                .fishBox{
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;

                    border: 6px solid transparent;
                    padding: 10px;
                    //background-color:#998f76;

                    width:${fishBoxWidth}px;
                    height:${fishBoxHeight}px;

                    user-select:none;
                }

                .fish{
                    height:${fishSize}px;
                    width:${fishSize}px;
                    padding: ${fishPadding}px
                }
                .fishImg{
                    max-width:100%;
                    max-height:100%;
                    position:relative;
                    z-index:3;
                    filter: brightness(.4);
                }

                .caught .fishImg{
                    filter:brightness(1);
                }

                .caught{
                    border-radius:100%;
                    background:radial-gradient(rgba(255,255,255, .7), transparent 70%);
                }


                .check{
                    max-width:${fishSize}px;
                    max-height:${fishSize}px;
                    position:absolute;
                    z-index:4;
                    mask: linear-gradient(to right, black 0%, transparent 0%);
                }

                .caught .check{
                    animation: checkTheCheck .15s ease both;
                }

                @keyframes checkTheCheck{
                    0%{
                        mask: linear-gradient(to right, black 0%, transparent 0%);
                    }
                    25%{
                        mask: linear-gradient(to right, black 25%, transparent 25%);
                    }
                    50%{
                        mask: linear-gradient(to right, black 50%, transparent 50%);
                    }
                    75%{
                        mask: linear-gradient(to right, black 75%, transparent 75%);
                    }
                    100%{
                        mask: linear-gradient(to right, black 100%, transparent 100%);
                    }
                    
                }


            `}
            </style>
        </div >)
    }

}

export default FishingDisplayJSLess
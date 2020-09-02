import React from 'react'

class FishingDisplayJSLessCheckless3Teams extends React.Component {
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
        const fishBoxHeight = 280
        const fishBoxWidth = 700
        const fishSize = 50
        const fishPadding = 2

        const redcolor = '#ff4646'//'#ff8e22'
        const bluecolor = '#0074d2'//'#903bff'
        const greencolor = 'limegreen'
        const toumei = "transparent"
        const transitionTime='.15s'
        const tiltred = "240deg"
        const tiltblue="120deg"
        const tiltgreen="0deg"


        return (<div>

            <div className="fishBox" id="fishBox">
                {
                    fish.map(([fishName, fished]) => (
                        <div className="fish" key={fishName} >
                            <div className="inside red" id={`red${fishName}`}></div>
                            <div className="inside blue" id={`blue${fishName}`}></div>
                            <div className="inside green" id={`green${fishName}`}></div>
                            <img className="fishImg" src={`./images/${fishName}.png`} />
                        </div>
                    ))
                }
            </div>
            <style jsx>
                {`
                .fishBox{
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;

                    border: 6px solid transparent;
                    padding: 10px;

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
                }

                .inside{
                    position:absolute;
                    height:${fishSize}px;
                    width:${fishSize}px;
                }

                .red, .blue, .green{
                    border-radius:100%;
                    overflow:hidden;
                    clip-path: polygon(50% 0%, 93.03% 23.14%, 93.88% 75%, 50% 100%, 7.41% 78.7%, 7.41% 25%);
                    mask: radial-gradient(white 67%, transparent 69%);
                }
                    
                .red{
                    background: ${redcolor};
                    animation: redFadeIn ${transitionTime} ease both;
                    clip-path: polygon(50% 100%, 7.41% 78.7%, 7.41% 25%, 50% 50%);
                }
                .blue{
                    background: ${bluecolor};
                    animation: blueFadeIn ${transitionTime} ease both;
                    clip-path:polygon( 93.03% 23.14%, 93.88% 75%, 50% 100%, 50% 50%);
                }
                .green{
                    background: ${greencolor};
                    animation: greenFadeIn ${transitionTime} ease both;
                    clip-path: polygon(7.41% 25%, 50% 0%, 93.03% 23.14%, 50% 50%);
                }

                @keyframes redFadeIn{
                    0%{
                        background: linear-gradient(${tiltred}, ${redcolor} 30%, ${toumei} 50%);
                    }
                    25%{
                        background: linear-gradient(${tiltred}, ${redcolor} 60%, ${toumei} 100%);
                    }
                    50%{
                        background: linear-gradient(${tiltred}, ${redcolor} 74%, ${toumei} 100%);
                    }
                    75%{
                        background: linear-gradient(${tiltred}, ${redcolor} 90%, ${toumei} 100%);
                    }
                    100%{
                        background: ${redcolor};
                    }
                }
                @keyframes blueFadeIn{
                    0%{
                        background: linear-gradient(${tiltblue}, ${bluecolor} 30%, ${toumei} 50%);
                    }
                    25%{
                        background: linear-gradient(${tiltblue}, ${bluecolor} 60%, ${toumei} 100%);
                    }
                    50%{
                        background: linear-gradient(${tiltblue}, ${bluecolor} 74%, ${toumei} 100%);
                    }
                    75%{
                        background: linear-gradient(${tiltblue}, ${bluecolor} 90%, ${toumei} 100%);
                    }
                    100%{
                        background: ${bluecolor};
                    }
                }
                @keyframes greenFadeIn{
                    0%{
                        background: linear-gradient(${tiltgreen}, ${greencolor} 30%, ${toumei} 50%);
                    }
                    25%{
                        background: linear-gradient(${tiltgreen}, ${greencolor} 60%, ${toumei} 100%);
                    }
                    50%{
                        background: linear-gradient(${tiltgreen}, ${greencolor} 74%, ${toumei} 100%);
                    }
                    75%{
                        background: linear-gradient(${tiltgreen}, ${greencolor} 90%, ${toumei} 100%);
                    }
                    100%{
                        background: ${greencolor};
                    }
                }
                }
                

            `}
            </style>
        </div >)
    }

}

export default FishingDisplayJSLessCheckless3Teams
import React from 'react'

class FishingDisplay extends React.Component {
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
    

    onFishCatch = (fishName) => {
        if(this.state.fishies[fishName])return
        this.setState((state) => {
            state.fishies[fishName] = true
            return {
                breadcrumbFish: fishName,
                fishies: state.fishies
            }
        })
        setTimeout(this.removeBreadcrumb, 3000)
    }

    removeBreadcrumb = () => {
        this.setState({ breadcrumbFish: false })
    }


    render = () => {
        var fish = Object.entries(this.state.fishies)

        //size constants- move to props?
        const fishBoxHeight = 270
        const fishBoxWidth = 486
        const fishSize = 50
        const fishPadding = 2


        return (<div>

            <div className="fishBox">
                {
                    fish.map(([n, fished]) => (
                        <div className="fish" key={n}>
                            {fished ? <img className="check" src="/Checkmark.png" /> : ""}
                            <img className={fished ? "fishImg caught" : "fishImg"} src={`/${n}.png`} />
                        </div>
                    ))
                }
            </div>
            {this.state.breadcrumbFish ?
                <div className="fishBreadcrumb">
                    <img className="fishImg caught" src={`/${this.state.breadcrumbFish}.png`} />
                </div>
                : ""}
                <button onClick={() => this.onFishCatch("WATER_FLEA")}>catch</button>
            <style jsx>
                {`
                .fishBox{
                    display:flex;
                    flex-flow: row wrap;

                    border:2px solid black;
                    border-radius:2px;
                    background-color:#f0e8d4;

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

                .caught{
                    filter:brightness(1);
                }


                .check{
                    max-width:${fishSize}px;
                    max-height:${fishSize}px;
                    position:absolute;
                    z-index:4;

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

                .fishBreadcrumb{
                    height:${fishSize}px;
                    width:${fishSize}px;
                    animation: fishBreadcrumbAnim 3s ease both;
                    box-shadow: 0 0 8px #5bff94;
                    border-radius:100%;
                    margin:15px;
                }

                @keyframes fishBreadcrumbAnim{
                    0%{
                        opacity:0%;
                    }
                    25%{
                        opacity:100%;
                    }
                    75%{
                        opacity:100%;
                    }
                    100%{
                        opacity:0%;
                    }
                }

            `}
            </style>
        </div>)
    }

    componentDidMount = ()=>{
        //setup for hooking into other software
    }
}

export default FishingDisplay

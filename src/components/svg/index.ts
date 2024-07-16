import ElectricSvg from "./ElectricSvg"
import DragonSvg from "./DragonSvg"
import FairySvg from "./FairySvg"
import FightingSvg from "./FightingSvg"
import FlyingSvg from "./FlyingSvg"
import GhostSvg from "./GhostSvg"
import GrassSvg from "./GrassSvg"
import GroundSvg from "./GroundSvg"
import IceSvg from "./IceSvg"
import BugSvg from "./BugSvg"
import WaterSvg from "./WaterSvg"
import SteelSvg from "./SteelSvg"
import RockSvg from "./RockSvg"
import PsychicSvg from "./PsychicSvg"
import PoisonSvg from "./PoisonSvg"
import NormalSvg from "./NormalSvg"
import FireSvg from "./FireSvg"
import { SvgProps } from "../../types/Pokemon"

const SvgComponents: { [key: string]: React.FC<SvgProps> } = {
  bug: BugSvg,
  dragon: DragonSvg,
  fire: FireSvg,
  electric: ElectricSvg,
  fairy: FairySvg,
  fighting: FightingSvg,
  flying: FlyingSvg,
  ghost: GhostSvg,
  grass: GrassSvg,
  ground: GroundSvg,
  ice: IceSvg,
  water: WaterSvg,
  steel: SteelSvg,
  rock: RockSvg,
  psychic: PsychicSvg,
  poison: PoisonSvg,
  normal: NormalSvg,
}

export default SvgComponents

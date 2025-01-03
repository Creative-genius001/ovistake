import * as RadixSlider from "@radix-ui/react-slider";
import { RadixRoot, SliderRange, SliderThumb, SliderTrack } from "./styles/radixSlider.css";
import { useStakeStore } from "../stores/stakeStore";

const Slider = () => {

  const { onMoveSlider, count } = useStakeStore();
  return (
    <div>
        <form>
            <RadixSlider.Root className={RadixRoot} 
             defaultValue={[count]}
             value={[count]} 
             onValueChange={(value: number[])=>{
              onMoveSlider(value[0])
             }}
             max={5000} 
             step={25}>
                <RadixSlider.Track className={SliderTrack}>
                    <RadixSlider.Range className={SliderRange} />
                </RadixSlider.Track>
                <RadixSlider.Thumb className={SliderThumb} aria-label="Volume" />
            </RadixSlider.Root>
	    </form>
    </div>
  )
}

export default Slider
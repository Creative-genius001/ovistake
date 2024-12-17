import * as RadixSlider from "@radix-ui/react-slider";
import { RadixRoot, SliderRange, SliderThumb, SliderTrack } from "./styles/radixSlider.css";

const Slider = () => {
  return (
    <div>
        <form>
            <RadixSlider.Root className={RadixRoot} defaultValue={[0]} max={5000} step={1}>
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
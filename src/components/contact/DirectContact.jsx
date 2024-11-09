import Phone from "../../assets/phone.svg";
import Location from "../../assets/location.svg";
import Time from "../../assets/time.svg";
import DirectContactItem from "./DirectContactItem";

export default function DirectContact() {
  return (
    <div className="grid gap-6 xl:gap-8 row-start-2 lg:row-start-1">
      <DirectContactItem
        itemSVG={Phone}
        contactType="Call Us"
        byContact="+008800000"
      />
      <DirectContactItem
        itemSVG={Location}
        contactType="Location"
        byContact="Dhaka, Bangladesh"
      />
      <DirectContactItem
        itemSVG={Time}
        contactType="Office Hours"
        byContact="Monday To Friday 9:30 Am - 5:30 Pm"
      />
    </div>
  );
}

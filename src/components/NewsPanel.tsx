import Image from "next/image";

export default function NewsPanel() {
  return (
    <div className="w-1/3 px-4 py-2 bg-blue-400/20 backdrop-blur-xl border">
      <div className="py-2 flex gap-4">
        <div className="w-[600px]">
          <div className="relative aspect-square">
            <Image src="https://ichef.bbci.co.uk/news/1024/branded_news/70c0/live/7ac40b80-acd3-11ef-8ab9-9192db313061.jpg" alt="Top news image" fill className="object-cover" />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <a href="https://www.whitehouse.gov/briefing-room/statements-releases/2024/11/28/statement-from-president-joe-biden-on-russias-attack-on-ukraine/">
            <div className="font-bold">US to start immediately on fresh push for Gaza ceasefire - BBC.com</div>
          </a>
          <div className="text-neutral-300 font-light text-sm">President Joe Biden aims for a deal involving the release of hostages and the removal of Hamas from power.</div>
        </div>
      </div>

      <div className="py-2 flex justify-between items-center border-t">
        <a href="https://www.whitehouse.gov/briefing-room/statements-releases/2024/11/28/statement-from-president-joe-biden-on-russias-attack-on-ukraine/">
          <div>‘Delete CFPB’: Musk calls for elimination of consumer bureau - POLITICO</div>
        </a>
        <div className="w-1/2 relative aspect-square">
          <Image src="https://www.whitehouse.gov/wp-content/uploads/2021/01/wh_social-share.png" alt="Second news image" fill className="object-cover" />
        </div>
      </div>

      <div className="py-2 flex justify-between items-center border-t">
        <a href="https://www.whitehouse.gov/briefing-room/statements-releases/2024/11/28/statement-from-president-joe-biden-on-russias-attack-on-ukraine/">
          <div>‘Delete CFPB’: Musk calls for elimination of consumer bureau - POLITICO</div>
        </a>
        <div className="w-1/2 relative aspect-square">
          {/* <Image src="/" alt="Second news image" fill className="object-cover" /> */}
        </div>
      </div>

      <div className="py-2 flex justify-between items-center border-t">
        <a href="https://www.whitehouse.gov/briefing-room/statements-releases/2024/11/28/statement-from-president-joe-biden-on-russias-attack-on-ukraine/">
          <div>‘Delete CFPB’: Musk calls for elimination of consumer bureau - POLITICO</div>
        </a>
        <div className="w-1/2 relative aspect-square">
          <Image src="https://www.whitehouse.gov/wp-content/uploads/2021/01/wh_social-share.png" alt="Second news image" fill className="object-cover" />
        </div>
      </div>

      <div className="py-2 flex justify-between items-center border-t">
        <a href="https://www.whitehouse.gov/briefing-room/statements-releases/2024/11/28/statement-from-president-joe-biden-on-russias-attack-on-ukraine/">
          <div>‘Delete CFPB’: Musk calls for elimination of consumer bureau - POLITICO</div>
        </a>
        <div className="w-1/2 relative aspect-square">
          <Image src="https://www.thedailybeast.com/resizer/v2/SUR3T6JZUNEIZKZRNFQGPBCKTI.jpg?smart=true&auth=d78a78842a75c78d2b5d01e3fb1ca910ccaac74211045c80621847c1676e93dd&width=1200&height=630" alt="Second news image" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}

const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');


menuToggle.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hidden'); 
});





// Toggle the dropdown menu
const dropdownButton = document.getElementById('dropdownButton');
const drop = document.getElementById('drop');

dropdownButton.addEventListener('click', () => {
  drop.classList.toggle('hidden');
});

// Update the button text when a season is selected
function selectSeason(season) {
  dropdownButton.innerHTML = `
    Season: ${season}
    <svg
      width="11"
      height="6"
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L5.5 5L10 1"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `;
  drop.classList.add('hidden');
}

// Close the dropdown if clicked outside
document.addEventListener('click', (e) => {
  if (!dropdownButton.contains(e.target) && !drop.contains(e.target)) {
    drop.classList.add('hidden');
  }
});








































const mushrooms = [
  {
    name: "Chanterelle",
    description: "Golden-yellow, funnel-shaped mushroom with false gills",
    notes: "Has toxic look-alikes - learn proper identification",
    tags: [
      { label: "edible", color: "bg-green-700" },
      { label: "summer", color: "bg-green-700" }
    ]
  },
  {
    name: "Morel",
    description: "Distinctive honeycomb-like cap structure",
    notes: "Must be cooked before eating",
    tags: [
      { label: "toxic", color: "bg-pink-900" },
      { label: "spring", color: "bg-cyan-700" }
    ]
  },
  {
    name: "Chicken of the Woods",
    description: "Bright orange bracket fungus with yellow edges",
    notes: "Has toxic look-alikes - learn proper identification",
    tags: [
      { label: "edible", color: "bg-green-700" },
      { label: "summer", color: "bg-green-700" }
    ]
  },
  {
    name: "Death Cap",
    description: "Pale green to white cap with white gills",
    notes: "Extremely toxic - study for safety awareness",
    tags: [
      { label: "toxic", color: "bg-pink-900" },
      { label: "summer", color: "bg-cyan-700" }
    ]
  }
];


const container = document.querySelector(".grid");

const mushroomCards = mushrooms
  .map(
    (mushroom) => `
  <div class="bg-zinc-800 p-4 max-w-[393px] md:max-w-[270px] w-full rounded-xl">
    <div class="flex flex-col gap-3">
      <h3 class="font-bold text-[21px] leading-7 text-white">${mushroom.name}</h3>
      <div>
        ${mushroom.tags
          .map(
            (tag) => `<button class="max-w-[52px] w-full px-1 ${tag.color} leading-5 text-sm font-medium py-1 rounded cursor-pointer">${tag.label}</button>`
          )
          .join("")}
      </div>
      <p class="text-stone-300 font-normal text-[16px] leading-[25.6px]">${mushroom.description}</p>
      <p class="bg-stone-700 p-3 rounded-md font-medium text-sm leading-[21px] text-stone-300">Important notes:
        <span class="font-normal text-sm leading-[21px] text-stone-300">${mushroom.notes}</span>
      </p>
    </div>
  </div>
`
  )
  .join("");

container.innerHTML = mushroomCards;

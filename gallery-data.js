// ===== GALLERY PHOTOS =====
// To add a work or team photo (cleaning, landscaping or team), put the file in images/gallery/ and add one line:
//   { src: "images/gallery/my-photo.jpg", category: "cleaning" },
// Work photos show as pictures only. "alt" is optional: a few words describing the photo for screen readers.
//
// Machines and chemicals also show a caption and links to the services that use them:
//   { src: "images/gallery/machines/x.jpg", caption: "Name", category: "machines", fit: "contain", links: ["factory-industrial.html#equipment"] },
//
// category: "cleaning", "landscaping", "team", "machines" or "chemicals" (decides the filter tab)
// links:    service pages; add "#equipment", "#disinfecting" or "#waste" to jump to that part of the page
// fit:      "contain" shows the whole item on white (for product shots)
// After editing this file, bump the ?v= number on gallery-data.js in gallery.html.

const GALLERY = [
  // --- Cleaning work ---
  { src: "images/gallery/cleaning/clean-01.jpg", category: "cleaning", alt: "Crew cleaning a glass wall, one on a ladder" },
  { src: "images/gallery/cleaning/clean-02.jpg", category: "cleaning", alt: "Wiping down a glass shopfront" },
  { src: "images/gallery/cleaning/clean-03.jpg", category: "cleaning", alt: "Sweeping and mopping a lounge area" },
  { src: "images/gallery/cleaning/clean-04.jpg", category: "cleaning", alt: "Mopping an empty unit" },
  { src: "images/gallery/cleaning/clean-05.jpg", category: "cleaning", alt: "Cleaning glass doors from a ladder" },
  { src: "images/gallery/cleaning/clean-06.jpg", category: "cleaning", alt: "Wiping a glass door" },
  { src: "images/gallery/cleaning/clean-07.jpg", category: "cleaning", alt: "Sweeping a lobby floor" },
  { src: "images/gallery/cleaning/clean-08.jpg", category: "cleaning", alt: "Team mopping a hall floor" },
  { src: "images/gallery/cleaning/clean-09.jpg", category: "cleaning", alt: "Cleaning gym equipment" },
  { src: "images/gallery/cleaning/clean-10.jpg", category: "cleaning", alt: "Cleaning high glass with an extension pole" },
  { src: "images/gallery/cleaning/clean-11.jpg", category: "cleaning", alt: "Wiping a full-height window" },
  { src: "images/gallery/cleaning/clean-12.jpg", category: "cleaning", alt: "Cleaning a window from inside" },
  { src: "images/gallery/cleaning/clean-13.jpg", category: "cleaning", alt: "Team cleaning a glass frontage" },
  { src: "images/gallery/cleaning/clean-14.jpg", category: "cleaning", alt: "Hosing down a floor" },
  { src: "images/gallery/cleaning/clean-15.jpg", category: "cleaning", alt: "Sweeping a lounge area" },
  { src: "images/gallery/cleaning/clean-16.jpg", category: "cleaning", alt: "Cleaning a glass door" },
  { src: "images/gallery/cleaning/clean-17.jpg", category: "cleaning", alt: "Function hall after cleaning" },
  { src: "images/gallery/cleaning/clean-18.jpg", category: "cleaning", alt: "Sweeping an outdoor walkway" },
  { src: "images/gallery/cleaning/clean-19.jpg", category: "cleaning", alt: "Wiping glass above a shopfront" },
  { src: "images/gallery/cleaning/clean-20.jpg", category: "cleaning", alt: "Scrubbing a floor" },
  { src: "images/gallery/cleaning/clean-21.jpg", category: "cleaning", alt: "Team cleaning a poolside hall" },
  { src: "images/gallery/cleaning/clean-22.jpg", category: "cleaning", alt: "Scraping residue off floor tiles" },
  { src: "images/gallery/cleaning/clean-23.jpg", category: "cleaning", alt: "Cleaning a kitchen counter" },
  { src: "images/gallery/cleaning/clean-24.jpg", category: "cleaning", alt: "Crew working in a poolside hall" },
  { src: "images/gallery/cleaning/clean-25.jpg", category: "cleaning", alt: "Wiping a mirror wall" },
  { src: "images/gallery/cleaning/clean-26.jpg", category: "cleaning", alt: "Cleaning high glass from scaffolding" },
  { src: "images/gallery/cleaning/clean-27.jpg", category: "cleaning", alt: "Mopping a large hall floor" },
  { src: "images/office.jpg", category: "cleaning", alt: "Window cleaning at an office" },
  { src: "images/hero-cleaner2.jpg", category: "cleaning", alt: "Cleaning windows from the inside" },
  { src: "images/postconst.jpg", category: "cleaning", alt: "Team cleaning a glass frontage before handover" },
  { src: "images/postconstcleaning.jpeg", category: "cleaning", alt: "Mopping floors in a newly finished space" },

  // --- Landscaping work ---
  { src: "images/gallery/landscaping/land-01.jpg", category: "landscaping", alt: "New planting in a garden bed" },
  { src: "images/gallery/landscaping/land-02.jpg", category: "landscaping", alt: "Artificial turf laid outside an entrance" },
  { src: "images/gallery/landscaping/land-03.jpg", category: "landscaping", alt: "Watering a planter wall" },
  { src: "images/gallery/landscaping/land-04.jpg", category: "landscaping", alt: "Trimming along a fence line" },
  { src: "images/gallery/landscaping/land-05.jpg", category: "landscaping", alt: "Blowing leaves off a grass-paver path" },
  { src: "images/gallery/landscaping/land-06.jpg", category: "landscaping", alt: "Weeding along a hedge" },
  { src: "images/gallery/landscaping/land-07.jpg", category: "landscaping", alt: "Watering shrubs" },
  { src: "images/gallery/landscaping/land-08.jpg", category: "landscaping", alt: "Tending a garden path" },
  { src: "images/gallery/landscaping/land-09.jpg", category: "landscaping", alt: "Watering newly planted beds" },
  { src: "images/gallery/landscaping/land-10.jpg", category: "landscaping", alt: "Clearing cut branches" },
  { src: "images/gallery/landscaping/land-11.jpg", category: "landscaping", alt: "Clearing a hedge-lined path" },
  { src: "images/gallery/landscaping/land-12.jpg", category: "landscaping", alt: "Tidying a landscaped play area" },
  { src: "images/gallery/landscaping/land-13.jpg", category: "landscaping", alt: "Sweeping a landscaped plaza" },
  { src: "images/gallery/landscaping/land-14.jpg", category: "landscaping", alt: "Clearing leaves with a blower between garden beds" },
  { src: "images/gallery/landscaping/land-15.jpg", category: "landscaping", alt: "Trimming a hedge with shears" },
  { src: "images/gallery/landscaping/land-16.jpg", category: "landscaping", alt: "Bagging palm trimmings beside a driveway" },
  { src: "images/gallery/landscaping/land-17.jpg", category: "landscaping", alt: "Raking leaves in a garden bed" },
  { src: "images/gallery/landscaping/land-18.jpg", category: "landscaping", alt: "Spraying garden beds" },
  { src: "images/gallery/landscaping/land-19.jpg", category: "landscaping", alt: "Bagging leaves along a fence line" },
  { src: "images/gallery/landscaping/land-20.jpg", category: "landscaping", alt: "Raking grass cuttings by the roadside" },
  { src: "images/gallery/landscaping/land-21.jpg", category: "landscaping", alt: "Spraying shrubs beside a walkway" },
  { src: "images/gallery/landscaping/land-22.jpg", category: "landscaping", alt: "Watering hedges in a condominium garden" },
  { src: "images/gallery/landscaping/land-23.jpg", category: "landscaping", alt: "Bagging fallen leaves by the kerb" },
  { src: "images/gallery/fallen-branch.jpg", category: "landscaping", alt: "Clearing a fallen tree branch" },
  { src: "images/cleanup.jpg", category: "landscaping", alt: "Keeping a hedge line tidy" },
  { src: "images/plants.jpg", category: "landscaping", alt: "Watering plants as part of grounds maintenance" },
  { src: "images/tree.jpg", category: "landscaping", alt: "Planting and soil work" },

  // --- Our team ---
  { src: "images/gallery/team/crew-1.jpg", category: "team", alt: "CSC Services crew outside a building" },
  { src: "images/gallery/team/crew-2.jpg", category: "team", alt: "CSC Services crew in a lobby" },

  // --- Machines we bring ---
  { src: "images/gallery/machines/auto-scrubber.jpg", caption: "Auto scrubber dryer", category: "machines", fit: "contain", links: ["factory-industrial.html#equipment", "office-commercial.html#equipment", "condo-apartment.html#equipment", "post-construction.html#equipment"] },
  { src: "images/gallery/machines/floor-polisher.jpg", caption: "Floor polishing machine", category: "machines", fit: "contain", links: ["factory-industrial.html#equipment", "office-commercial.html#equipment", "condo-apartment.html#equipment"] },
  { src: "images/gallery/machines/wet-dry-vacuum.jpg", caption: "Wet & dry vacuum cleaner", category: "machines", fit: "contain", links: ["factory-industrial.html#equipment", "office-commercial.html#equipment", "condo-apartment.html#equipment", "post-construction.html#equipment", "house-cleaning.html#equipment", "tuition-centers.html#equipment"] },
  { src: "images/gallery/machines/carpet-cleaner.jpg", caption: "Carpet cleaning machine", category: "machines", fit: "contain", links: ["office-commercial.html#equipment", "house-cleaning.html#equipment", "tuition-centers.html#equipment"] },
  { src: "images/gallery/machines/pressure-washer.jpg", caption: "High-pressure washer", category: "machines", fit: "contain", links: ["factory-industrial.html#equipment", "condo-apartment.html#equipment", "post-construction.html#equipment"] },

  // --- Chemicals we use ---
  // No chemical photos yet. Add them here with category: "chemicals", for example:
  // { src: "images/gallery/chemicals/glass-cleaner.jpg", caption: "Glass cleaner", category: "chemicals", fit: "contain", links: ["office-commercial.html#equipment"] },
];

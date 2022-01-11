const gridItems = [

    {
      id: 'Education',
      Issues: 'Education',
      NumberOfAfectedPeople: '3 Milion',
      PriorityRank: 'Medium',
      BriefDescription: 'Education is essential for youth in creating opportunities for themselves. Personal development. The leaders of tomorrow.',
    },
  
    {
      id: 'Poverty',
      Issues: 'Poverty',
      NumberOfAfectedPeople: '689 million',
      PriorityRank: 'High',
      BriefDescription: '689 million people live in extreme poverty, surviving on less than $1.90 a day',
    },
  
    {
      id: 'Water and Sanitation',
      Issues: 'Water and Sanitation',
      NumberOfAfectedPeople: 'Not defined',
      PriorityRank: 'Medium',
      BriefDescription: `No clean drinking water African do not have any clean drinking water. Their water is dark brown and have bugs in it. The people get sick from drinking it.`,
    },
  
    {
      id: 'Hunger',
      Issues: 'Hunger',
      NumberOfAfectedPeople: '7.6 Bilion',
      PriorityRank: 'high',
      BriefDescription: 'How many people are hungry in the world? Globally, about 8.9% of the world’s population 690 million people go to bed on an empty stomach.',
    },

    {
      id: 'Climate Change',
      Issues: 'Climate Change',
      NumberOfAfectedPeople: '260 Million',
      PriorityRank: 'high',
    BriefDescription: 'It is an inspiration that encourages taking care of our planet.',
    },
  
  ]
  
  const grid = document.querySelector("#flex-grid");
  
  generateList();
  function searchFilter() {
    let input, filter;
    input = document.getElementById('myInput');
    generateList(input);
  }
  
  function generateList(searchFilter) {
    grid.innerHTML = `<div class="grid-titles">
      <div class="grid-title1">Issues</div>
      <div class="grid-title2">Number of Afected People</div>
      <div class="grid-title3">Priority Rank</div>
      <div class="grid-title4">Brief Description</div>
      <div class="grid-title5"></div>
    </div>
  </div>`
  
    for (let i = 0; i < gridItems.length; i++) {
      if (!searchFilter || gridItems[i].Issues.toUpperCase().includes(searchFilter.value.toUpperCase())) {
        grid.innerHTML += `<div id="grid-items" class="grid-items">
       <div class="grid-${gridItems[i].id}1" id="${gridItems[i].id}">${gridItems[i].Issues}</div>
       <div>${gridItems[i].NumberOfAfectedPeople}</div>
       <div>${gridItems[i].PriorityRank}</div>
       <div>${gridItems[i].BriefDescription}</div>
       <div><a href="global_issues.html#${gridItems[i].id}-2"><img src="assets/images/view_details2-2.jpg.png"
       alt="view_details" class="view_details"></div>
     </div>`;
      }
    }
  }
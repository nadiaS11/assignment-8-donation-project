# donation-campaign

### 3 project features:
1. Home component has DonationContext using createContext() to give the data to the Banner component without pop drilling. depending on  DonationContext values the input field sets the value and the search button triggers handleSearch function to show DonationCard by the search value.
2. From the DonationDetails component where clicking on the Donate button stores that donation's information in local storage once the donation is made a toast appears. The Donation page gets the data set from the details page in the local storage. and uses a slice variable and seeAll state to determine the amount of donation set in local storage. when there's more than 4 donation info, the UI will have 4 DonatedCard initially along with a see more button by clicking which the page shows all the DonatedCards. If there's no donation made then  it shows the ErrorPage component.
3. the statistics page also gets the same local storage data to show in a pie chart. The pie chart show the amount of donation made vs total available donation  in percentage. When there's no donation made the pie shows total donation as 100%.



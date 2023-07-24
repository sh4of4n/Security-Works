/*
--------------------------------------- CHANGE LOG ---------------------------------------
Date(DD/MM/YY)        Author    Version         Remarks
------------------------------------------------------------------------------------------
17/07/2023            SawYN     1.0.0           - Create filterData
*/


//table data sorting function
// params (all are array): data to be sorted, columns need to be sorted, data sort in ascending/descending
export const sortData = (data, sortCol, sortAscending) => {
  data.sort((a,b)=>{
    if(sortCol !== null){
      for (let i = 0; i < sortCol.length; i++) {
        const column = sortCol[i];
        const first = Object.keys(a)[column];
        const second = Object.keys(b)[column];

        const comparisonResult = a[first].localeCompare(b[second]);
  
        if (comparisonResult !== 0) {
          return (
            sortAscending[sortCol[i]] ? comparisonResult : -comparisonResult
          );
        }
      }
    }
    return 0;
  });

  return data;
}
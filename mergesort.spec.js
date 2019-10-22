describe("Split Array function", function() {
  it("is able to split an array into two halves", function() {
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
  });
  it("is able to split an uneven array into two halves", function() {
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
  });
});

describe("Merge function", function() {
  it("is able to merge two sorted arrays into one sorted array", function() {
    expect(merge([1, 3, 5, 7], [2, 4, 6, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    // expect(merge([8, 6, 4, 2], [7, 5, 3, 1])).toEqual([8, 7, 6, 5, 4, 3, 2, 1]);
  });
  it("2 singletons", function() {
    expect(merge([3], [1])).toEqual([1, 3]);
  });
});

describe("Mergesort", function() {
  it("handles empty arrays", function() {
    expect(mergeSort([])).toEqual([]);
  });
  it("sorts the array", function() {
    expect(mergeSort([3, 1, 5, 7, 2, 4, 6, 8])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ]);
  });
  it("sorts a harder array with duplicates", function() {
    expect(mergeSort([3, 2, 8, 14, 14])).toEqual([2, 3, 8, 14, 14]);
  });
});

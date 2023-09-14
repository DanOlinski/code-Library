class ArrayFormatter

  # Takes in an array and two args for the left and right side wrapping
  # Returns a new array with string containing the "wrapped" version of each element
  # Example arguments: [1, 2, 3, 4, 5], "<<", ">>"
  # Returns array:     ["<<1>>", "<<2>>", "<<3>>", "<<4>>", "<<5>>"]
  def wrap_array_items(arr, left, right)
    finalArr = []
    

    arr.map { |i| finalArr.push("#{left}#{i}#{right}")}

    return finalArr
  end
end

s = ArrayFormatter.new
test=[1, 2, 3, 4, 5]
puts s.wrap_array_items(test, "<<", ">>")
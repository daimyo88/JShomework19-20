var skills = _(data)
    .map("skills")
    .flattenDeep()
    .uniq()
    .map(function(i){
      return _.toLower(i);
      })
    .sortBy()
    .value();

console.log(skills);

var names = _(data)
  .sortBy(function(obj){
    return Math.max(obj.friends.length);
  })
  .map("name")
  .value();

console.log(names);

var friends = _(data)
  .map(function(obj){
    return obj.friends;
  })
  .flattenDeep()
  .map("name")
  .uniq()
  .value()

console.log(friends);

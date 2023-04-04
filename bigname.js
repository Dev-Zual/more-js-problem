const friends = ["shopon", "irfan Mahmud", "time islam", "babulal", "shohidul"];

function bestFriend(friends) {
  let bestFriend = friends[0];
  for (const friend of friends) {
    if (friend.length > bestFriend.length) {
      bestFriend = friend;
    }
  }
  return bestFriend;
}

console.log(bestFriend(friends));

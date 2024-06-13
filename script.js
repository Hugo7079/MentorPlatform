// function sendEmail(to_email, to_name, student_nickname, bid) {
//   emailjs.send("service_3xv85hv", "template_i7j0jkb", {
//       to_email: to_email,
//       to_name: to_name,
//       student_nickname: student_nickname,
//       bid: bid
//   }).then((response) => {
//       console.log('Email sent successfully!', response.status, response.text);
//   }).catch((error) => {
//       console.error('Failed to send email', error);
//   });
// }

// setTimeout(async () => {
//   const mentorDoc = await getDoc(docRef);
//   const mentorData = mentorDoc.data();
//   if (mentorData.bids.length > 0) {
//     const highestBid = mentorData.bids.reduce((max, bid) => bid.bid > max.bid ? bid : max, mentorData.bids[0]);
//     sendEmail(mentorData.email, mentorData.nickname, highestBid.nickname, highestBid.bid);
//     sendEmail(highestBid.email, highestBid.nickname, mentorData.nickname, highestBid.bid);
//   }

//   await updateDoc(docRef, {
//     active: false
//   });

//   console.log('Mentor deactivated after 3 minutes:', docRef.id);
// }, 3 * 60 * 1000); // 3 minutes in milliseconds
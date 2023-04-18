 let phoneNumbers = [
     "0901234567",
     "0912345678",
     "0987654321",
     "0888888888",
     "0877777777",
     "0866666666"
 ];

    let viettel = [];
    let mobiphone = [];
    let vinaphone = [];
 for (let i = 0; i < phoneNumbers.length; i++) {
     let phoneNumber = phoneNumbers[i]
     let number = phoneNumber.substring(0,3);
     if (number ==='090' ||number === '083' || number==='089'){
         viettel.push(phoneNumber)
     }else if (number==='091'||number==='094'||number ==='088'){
         mobiphone.push(phoneNumber)
     }else vinaphone.push(phoneNumber)
 }
 console.log(viettel)
 console.log(mobiphone)
 console.log(vinaphone)
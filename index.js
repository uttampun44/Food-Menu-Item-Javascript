////////creating menu item in javascript /////////
let menu  = ["fastfood", "chinese", "thai", "indian"];
let[fastfood, chinese, thai, india] = menu;
////conditional applying//////

 alert(`Please Select the Menu of food  ${menu}`);


while(menu){

  let userchoice = prompt("Enter your food choice!");

              if(menu[0] == userchoice){
                let fastfoodchoice = prompt("You have selected the fastfood Items!");
                switch(fastfoodchoice){
                      case "Burger":
                           if(fastfoodchoice == "Burger"){
                            alert("You have selected the Burger");
                            exit();
                                  }
                      break;
                      case "Pizza":
                        if(fastfoodchoice == "Pizza"){
                            alert("You have selected the Pizza!")
                            exit();
                          }
                        break;
                        default:
                            alert(Error);
                   }
              }else if(menu[1] == userchoice){
                let chinesefood = prompt("You have selected the chinese Items!");
                switch(chinesefood){
                      case "Thupka":
                           if(chinesefood == "Thupka"){
                            alert("You have selected the Thupka");
                            exit();
                           }
                      break;
                      case "momo":
                        if(chinesefood == "momo"){
                            alert("You have selected the momo!")
                            exit();
                        }
                        break;
                        default:
                            alert(Error);
                    }
                  }else if(menu[2] == userchoice){
                    let thaifood = prompt("You have selected the thai Items!");
                    switch(thaifood){
                          case "Dim Sums":
                               if(thaifood == "Dim Sums"){
                                alert("You have selected the Dim Sums")
                               }
                          break;
                          case "Spring Rolls":
                            if(thaifood == "Spring Rolls"){
                                alert("You have selected the Spring Rolls!");
                                exit();
                            }
                            break;
                            default:
                                alert(Error);
                       }
               }
                else if(menu[3] == userchoice){
                    let indianfood = prompt("You have selected the indian Items!");
                    switch(indianfood){
                          case "Briyani":
                               if(indianfood == "Briyani"){
                                alert("You have selected the Briyani")
                                exit();
                               }
                          break;
                          case "Paratha":
                            if(indianfood == "Paratha"){
                                alert("You have selected the Paratha!");
                                exit();
                            }
                            break;
                            default:
                                alert(Error);
                       }
                      }
                    }
            ///////////finally javascript basic is clear////////////
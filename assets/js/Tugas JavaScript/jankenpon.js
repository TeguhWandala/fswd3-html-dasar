console.log ("只今 株てか ジャンケンポン!");
alert("只今 株てか ジャンケンポン!");

let poin = 0;

function main() {
  let player = prompt("Masukkan pilihan anda batu, gunting, atau kertas");

  let computer = Math.random();
  switch (true) {
    case computer < 0.34:
      computer = "batu";
      break;
    case computer <= 0.67:
      computer = "gunting";
      break;
    default:
      computer = "kertas";
      break;
  }

  switch (player) {
    case computer:
      alert("Hasil: SERI!");
      break;
    case "batu":
      switch (computer) {
        case "gunting":
          alert("Hasil: Anda MENANG!");
          poin += 1;
          break;
        default:
          alert("Hasil: Anda KALAH!");
          poin -= 1;
          break;
      }
      break;
    case "gunting":
      switch (computer) {
        case "kertas":
          alert("Hasil: Anda MENANG!");
          poin += 1;
          break;
        default:
          alert("Hasil: Anda KALAH!");
          poin -= 1;
          break;
      }
      break;
    case "kertas":
      switch (computer) {
        case "batu":
          alert("Hasil: Anda MENANG!");
          poin += 1;
          break;
        default:
          alert("Hasil: Anda KALAH!");
          poin -= 1;
          break;
      }
      break;
    default:
      alert("Pilihan tidak valid!");
      break;
  }

  alert(
    "Anda memilih: " +
      player +
      "\nKomputer memilih: " +
      computer +
      "\nPoin anda: " +
      poin
  );

  let lagi = confirm("Main lagi?");
  if (lagi) {
    main();
  } else {
    alert("Terima kasih sudah bermain!");
  }
}

main();
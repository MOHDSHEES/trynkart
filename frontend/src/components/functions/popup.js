import Swal from "sweetalert2";
function popup(props) {
  Swal.fire({
    toast: true,
    position: "top",
    icon: "success",
    width: "250px",
    // showClass: {
    //   popup: "animate__animated animate__fadeInDown",
    // },
    // hideClass: {
    //   popup: "animate__animated animate__fadeOutUp",
    // },
    title: props.title,
    showConfirmButton: false,
    timer: 2000,
  });
}
export default popup;

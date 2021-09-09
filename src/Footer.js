import React from 'react'

const Footer=()=>{
return (
    <>
    <footer class="footer py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-start">
                        {/* <!-- This script automatically adds the current year to your website footer--> */}
                        {/* <!-- (credit: https://updateyourfooter.com/)--> */}
                        {/* <script>
                            document.write(new Date().getFullYear());
                        </script> */}
                    </div>
                    <div class="col-lg-4 my-3 my-lg-0">
                        <h4>Made with 💌 </h4>
                    </div>
                    <div class="col-lg-4 text-lg-end">
                    </div>
                </div>
            </div>
        </footer>
    </>
)
}

export default Footer
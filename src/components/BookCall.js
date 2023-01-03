
function BookCall(props) {
    return <>
        <div class="modal fade show" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" Style="display: block;  background: rgba(0,0,0,0.5)" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Want to Book a Call?</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={props.closePopup} aria-label="Close"></button>
            </div>
            <div class="modal-body">
                
                <p>Hi, Don't worry its much easy process to contact us. Just go to contact page and fill your information
                    with subject you want to book a call. We'll get back to you as soon as possible.<br/> Thanks
                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onClick={props.closePopup} data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
    </>
}

export default BookCall;
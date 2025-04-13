
$("#registration-form").on("submit", function (event) {
    event.preventDefault();
  
    const name = $("#name").val();
    const email = $("#email").val();
    const age = $("#age").val();
    const phone = $("#phone").val();
    const distance = $("#distance").val();
    const medical = $("#medical").val();
  

    if (!name || !email || !age || !phone || !distance) {
      alert("Please fill out all required fields!");
      return;
    }
  
  
    const participantData = {
      name,
      email,
      age,
      phone,
      distance,
      medical
    };
  

    $.ajax({
      url: 'http://localhost:5000/register', 
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(participantData),
      success: function (response) {
        $('#message').html(`<div class="alert alert-success">Registration successful! Welcome ${response.participant.name}!</div>`);
      },
      error: function (error) {
        $('#message').html(`<div class="alert alert-danger">Error: ${error.responseJSON.error}</div>`);
      }
    });
  });
  
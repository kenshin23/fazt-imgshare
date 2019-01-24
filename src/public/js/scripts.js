$('#btn-like').click(function(e){
	e.preventDefault();
	let imgId = $(this).data('id');
	$.post('/images/' + imgId + '/like')
		.done(data => {
			$('.likes-count').text(data.likes);
		});
});

$('#post-comment-form').hide();
$('#btn-toggle-comment').click(function(e){
	e.preventDefault();
	$('#post-comment-form').slideToggle();
});

$('#btn-delete').click(function(e){
	e.preventDefault();
	let $this = $(this);
	const response = confirm('Are you sure you want to delete this image?');
	if(response){
		let imgId = $this.data('id');
		$.ajax({
			url: '/images/' + imgId,
			type: 'DELETE',
		})
			.done(result => {
				$this.removeClass('btn-danger').addClass('btn-success');
				$this.find('i').removeClass('fa-times').addClass('fa-check');
				$this.html('<i class="fa-check"></i> <span>Deleted</span>');
			});
	}
});
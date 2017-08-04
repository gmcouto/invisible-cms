<template>
	<div>
		<h1>{{ message }}</h1>
		<ul v-if="posts && posts.length">
			<li v-for="post of posts">
				<p><div id="titulo">{{post.title}}</div></p>
				<div ref="body" class="editor" id="editor" data-name="main-content" v-html="post.body"></div>
			</li>
		</ul>
        <div v-else>Nothing to see here</div>

		<ul v-if="errors && errors.length">
			<li v-for="error of errors">
				{{error.message}}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
    el: "#app",
    replace: false,
    data: {
        message: "Posts",
        posts: [],
        errors: []
    },
    created: function() {
        var comp = this;
    	axios.get('/post')
    	.then(function(response) {
    		comp.posts = response.data
    	}).catch(function(err) {
    		comp.errors.push(err);
    	});
    },
    updated: function() {
        $('#editor').summernote();
        //AlloyEditor.editable('editor');
    }
}
</script>

<style>
    h1 {
        color: teal;
    }
</style>
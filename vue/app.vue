<template>
    <h1>OiN: {{ message }}</h1>
</template>

<script>
module.exports = {
    el: "#app",
    replace: false,
    data: {
        message: "We did it #yes!"
    }
}
</script>

<style>
    h1 {
        color: teal;
    }
</style>
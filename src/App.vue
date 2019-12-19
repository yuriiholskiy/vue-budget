<template>
	<div id="app-budget">
		<navbar />
		<div class="container">
			<router-view />
		</div>
	</div>
</template>

<script>
import Navbar from '@/components/Navbar';
export default {
	name: 'App',
	components: {
		Navbar
	}
}
</script>

<style>
:root {
	--navbar-bg: #555;
	--main-bg: #fff;
	--font-color: #666;
	--btn-bg-color: #555;
}

.mt-1 {
	margin-top: 1rem;
}
.mb-1 {
	margin-bottom: 1rem;
}
.ml-1 {
	margin-left: 1rem;
}
.mr-1 {
	margin-right: 1rem;
}
.mx-1 {
	margin-left: 1rem;
	margin-right: 1rem;
}
.my-1 {
	margin-top: 1rem;
	margin-bottom: 1rem;
}

.pt-1 {
	padding-top: 1rem;
}
.pb-1 {
	padding-bottom: 1rem;
}
.pl-1 {
	padding-left: 1rem;
}
.pr-1 {
	padding-right: 1rem;
}
.px-1 {
	padding-left: 1rem;
	padding-right: 1rem;
}
.py-1 {
	padding-top: 1rem;
	padding-bottom: 1rem;
}
.fz1 {
	font-size: 1rem;
}
.fz2 {
	font-size: 1.5rem;
}
.df {
	display: flex;
}
.jcsb {
	justify-content: space-between;
}
.aic {
	align-items: center;
}
.tac {
	text-align: center;
}
.cp {
	cursor: pointer;
}

.absolute-top {
	position: absolute;
	top: 5rem;
	right: 5rem;
}

.app-budget {
	background-color: var(--main-bg);
	color: var(--font-color);
}

.app-budget-nav {
	background-color: var(--navbar-bg);
}

.app-budget-btn {
	background-color: var(--btn-bg-color);
}
</style>
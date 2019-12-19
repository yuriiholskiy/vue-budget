<template>
	<nav class="app-budget-nav px-1">
		<div class="nav-wrapper">
			<a href="#" class="brand-logo">Vue budget</a>
			<ul id="nav-mobile" class="right hide-on-med-and-down">
				<li>
					<router-link :to="{name: 'home'}">Home</router-link>
				</li>
				<li>
					<router-link :to="{name: 'budget'}">Budget</router-link>
				</li>
				<li>
					<router-link :to="{name: 'about'}">About</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>

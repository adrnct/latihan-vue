<template>
  <div class="w-96 shadow-xl p-6" :class="stateLogin ? 'skeleton' : ''">
    <h2 class="text-center text-3xl font-bold mb-6">Login</h2>

    <!-- Email Field -->
    <div class="form-control mb-4">
      <label class="label" for="email">
        <span class="label-text">Email</span>
      </label>
      <input
        type="email"
        id="email"
        v-model="email"
        class="input input-bordered w-full"
        placeholder="Enter your email"
        required
      />
    </div>

    <!-- Password Field -->
    <div class="form-control mb-6">
      <label class="label" for="password">
        <span class="label-text">Password</span>
      </label>
      <input
        type="password"
        id="password"
        class="input input-bordered w-full"
        placeholder="Enter your password"
        required
      />
    </div>

    <!-- Login Button -->
    <div class="flex justify-end">
      <button
        class="btn btn-neutral flex justify-items-center"
        :class="stateLogin ? 'loading loading-spinner text-error' : ''"
        @click.prevent="loginAction()"
      >
        {{ stateLogin ? "" : "Login" }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const stateLogin = ref(false);
    const router = useRouter();
    const email = ref('')
    const loginAction = () => {
      stateLogin.value = true;
      console.log(email.value)
      setTimeout(() => {
        stateLogin.value = false;
        router.push({ path: "/dashboard", query: { email: email.value } });
      }, 3000);
    };

    return { stateLogin, loginAction, email };
  },
};
</script>

<style lang="scss" scoped></style>

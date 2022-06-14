<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                新建文件夹
              </DialogTitle>
              <div class="mt-2">
                <input
                  v-model="filename"
                  class="text-sm text-gray-500 p-1 outline-none border w-full"
                  @keyup.enter="createFolder()"
                />
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="saveAndcloseModal"
                >
                  确定
                </button>

                <button
                  type="button"
                  class="inline-flex justify-center border border-transparent px-4 py-2 text-sm font-medium text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  取消
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, watch } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

import { useFileStore } from "../store/filesStore";

const isOpen = ref(false);
const filename = ref("");

const store = useFileStore();

var props = defineProps({
  modelValue: Boolean,
});

watch(props, (n, o) => {
  isOpen.value = n.modelValue;
});

var emit = defineEmits(["update:modelValue"]);

function createFolder() {
  console.log(filename);
  store.createFolder(filename.value);
}

const saveAndcloseModal = () => {
  store.createFolder(filename.value);
  closeModal();
};
function closeModal() {
  emit("update:modelValue", false);
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}
</script>

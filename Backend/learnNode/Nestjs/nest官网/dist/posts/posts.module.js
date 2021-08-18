"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const posts_controller_1 = require("./posts.controller");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const post_model_1 = require("./post.model");
let PostsModule = class PostsModule {
};
PostsModule = __decorate([
    common_1.Module({
        imports: [
            nestjs_typegoose_1.TypegooseModule.forFeature([post_model_1.Post])
        ],
        controllers: [posts_controller_1.PostsController]
    })
], PostsModule);
exports.PostsModule = PostsModule;
//# sourceMappingURL=posts.module.js.map
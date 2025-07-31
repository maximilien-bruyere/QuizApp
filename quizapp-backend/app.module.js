"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const prisma_module_1 = require("./prisma/prisma.module");
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
const subject_module_1 = require("./subject/subject.module");
const quiz_module_1 = require("./quiz/quiz.module");
const question_module_1 = require("./question/question.module");
const option_module_1 = require("./option/option.module");
const quiz_attempt_module_1 = require("./quiz-attempt/quiz-attempt.module");
const answer_module_1 = require("./answer/answer.module");
const category_module_1 = require("./category/category.module");
const flashcard_module_1 = require("./flashcard/flashcard.module");
const leaderboard_module_1 = require("./leaderboard/leaderboard.module");
const upload_module_1 = require("./upload/upload.module");
const throttler_1 = require("@nestjs/throttler");
const upload_controller_1 = require("./upload/upload.controller");
const upload_service_1 = require("./upload/upload.service");
const information_module_1 = require("./information/information.module");
const export_module_1 = require("./export/export.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            throttler_1.ThrottlerModule.forRoot({
                throttlers: [{ ttl: 60, limit: 10 }],
            }),
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            user_module_1.UserModule,
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            subject_module_1.SubjectModule,
            quiz_module_1.QuizModule,
            question_module_1.QuestionModule,
            option_module_1.OptionModule,
            quiz_attempt_module_1.QuizAttemptModule,
            answer_module_1.AnswerModule,
            category_module_1.CategoryModule,
            flashcard_module_1.FlashcardModule,
            leaderboard_module_1.LeaderboardModule,
            upload_module_1.UploadModule,
            information_module_1.InformationModule,
            export_module_1.ExportModule,
        ],
        controllers: [app_controller_1.AppController, upload_controller_1.UploadController],
        providers: [app_service_1.AppService, upload_service_1.UploadService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map